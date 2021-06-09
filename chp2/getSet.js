class Speaker {
    constructor(name) {
        this.name = name;
    }
    get Message() {
        if (!this.message.includes(this.name)) {
            throw Error("message is missing speaker's name");
        }
        return this.message;
    }
    set Message(value) {
        let tmpMessage = value;
        if (!value.includes(tmpMessage)) {
            tmpMessage = this.name + ' ' + value;
        }
        this.message = tmpMessage;
    }
}
const speaker = new Speaker('john');
speaker.Message = 'hello john';
console.log(speaker.Message);
