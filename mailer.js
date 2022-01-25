const mailer = require('nodemailer');
 
module.exports = async function maile (data){
    //노드 메일러 함수, 본인의 이메일과 비밀번호를 입력해주세요. 
    let transporter = mailer.createTransport({
        service: 'gmail',//ex) gmail과 같은 이메일 서비스, 자세한 건 노드 메일러 사이트 참고
        auth: {
            user: '',//본인의 이메일
            pass: ''//본인의 비밀번호, 보안 관련 설정은 README.md 참고
        },
        port: 587,
        secure: false,
        host: 'smtp.gmail.com'
    });

    let mailOptions = await transporter.sendMail({
        from: '',//본인의 이메일
        to: '',//받는 사람의 이메일
        subject: '',//메일 제목 ex)`${data.serverName} 서버`
        text: ''//메일 내용 ex)`${data.serverName} 서버가 정상적으로 작동 중 입니다.`
    });

    console.log("메일 보내기 시작: %s", mailOptions.messageId);
};