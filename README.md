# Server Status Check Program

해당 프로그램은 서버 상태를 체크하는 프로그램으로써, 스케쥴링을 통하여 정해진 주기로 미리 설정해둔 서버로 HTTP Request을 전송합니다.
문제가 발생한다면 사용자가 사전에 정의해둔 주소로 메일 전송을 통한 알림을 전달 합니다.

This program is a program that checks the server status and sends HTTP Requests to a server that has been set in advance at a predetermined period through scheduling. If a problem occurs, a notification is delivered through mail transmission to an address defined in advance by the user.

## Getting Started

- [Node Schedule](https://github.com/node-schedule/node-schedule#readme)
- [Nodemailer](https://nodemailer.com/about/)
- [Google Security Settings](https://myaccount.google.com/lesssecureapps)


## 구글 보안 설정 관련

구글 보안 설정에 접속하여 2차 비밀번호를 사용 중이였다면 해지 합니다. 그 다음 보안 수준이 낮은 앱 허용을 하여준 뒤, 프로그램을 재시작합니다.
그래도 계정 보안 관련 이슈가 계속 된다면 https://accounts.google.com/b/0/DisplayUnlockCaptcha 해당 링크 또한 접속하여 계정 액세스 허용을 하길 바랍니다. 

If you were using a secondary password by accessing Google Security Settings, cancel it. Then, after allowing low-security apps, restart the program.
Still, if the issue of account security continues, please access the link to https://accounts.google.com/b/0/DisplayUnlockCaptcha to allow access to the account.