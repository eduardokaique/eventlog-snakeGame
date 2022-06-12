class LogModel {
    id: string;
    logTypeId: string;
    socketId: string;
    nickName: string;
    value: string;
    created_at: Date;


    constructor(socketId: string, nickName: string, value: string) {
        this.socketId = socketId;
        this.nickName = nickName;
        this.value = value;
    }
}


export { LogModel }