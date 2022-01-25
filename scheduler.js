const mailer = require('./mailer');
const nodeScheculer = require('node-schedule');
const request = require('request');

nodeScheculer.scheduleJob('0 0 * * * *', function () {
    //매시간 정시 0분에 실행,사용법: https://github.com/node-schedule/node-schedule#readme
    statusCheckScheduler();
});

const statusCheckScheduler = () => {
    //서버 상태 확인
    try{
        //
        const url = [{'google':'https://google.com'}];//응답을 받을 주소, 서버네임:서버주소
        let data = {"serverName": "", "statusCode":""};//서버 이름과 응답 코드를 담을 변수
        
        for(let i in url){
            request(Object.values(url[i])[0], (error, res, body) => {
                //
                if(error){
                    //
                    console.log('error -',error);
                    throw new Error(error);
                }else if(res.statusCode !== 200) {
                    //필요하다면 매개 변수로 메일 제목과 내용을 보내준다.
                    mailer(data);
                 }
             });
        };
    }catch(err){
        //
        console.log('스케쥴러 에러 -',err);
    }; 
};

