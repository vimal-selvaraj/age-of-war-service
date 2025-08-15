
## - Folder structure
age-of-war-service/
    --> src/
        --> models/
        --> services/ 
        --> controllers/ 
        --> routes/       
        --> utils/         
        --> App.js          
        --> Server.js     
    --> package.json
    --> README.md
    --> .gitignore

## - Prerequisites
Nodejs - v18.20.8
npm - From Nodejs

## Installation & Setup
1.Clone repository
 git clone <repo_url>
 cd age-of-war-service

2.Install dependencies
 npm install

3.Run in development mode
 npm run dev

## API-Overview
POST: /battle/commence-battle

Request body:
{
  "myArmyStr": "Spearmen#10;Militia#30;FootArcher#20;LightCavalry#1000;HeavyCavalry#120",
  "opponentArmyStr": "Militia#10;Spearmen#10;FootArcher#1000;LightCavalry#120;CavalryArcher#100",
  "firstOccurenceOnly": false,
  "advantageMap": {}
}
Note: "firstOccurenceOnly" and "advantageMap" are optional

Response:
{
  "statusText": "ok",
  "message": "Winning Arrangements found",
  "data": {
    "totalWinning": 3,
    "arrangements": [
      {
        "arrangementNumber": 1,
        "wins": 3,
        "order": ["10 Spearmen", "30 Militia", ...],
        "results": [
          {
            "battle": 1,
            "myPlatoon": "10 Spearmen",
            "opponentPlatoon": "10 Militia",
            "outcome": "draw"
          }
        ]
      }
    ]
  }
}
