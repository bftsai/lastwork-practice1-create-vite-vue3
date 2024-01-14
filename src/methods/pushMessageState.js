import emitter from '@/methods/emitter';

export default function (response) { 
    if(response.data.success){
        emitter.emit('push-message',{
            style: 'success',
            title: response.data.message? response.data.message:`更新成功`,
        })
    }else{
        // 有些訊息為字串或為陣列，故先統一格式為陣列
        const message = typeof response.data.message === 'string'? [response.data.message] : response.data.message;
        emitter.emit('push-message',{
            style: 'danger',
            title: response.data.message,
            content: message.join('、'),
        })
    }
}