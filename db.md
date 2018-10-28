# Modify this code to update the DB schema diagram.
# To reset the sample schema, replace everything with
# two dots ('..' - without quotes).

Room
-
Id PK int
Status boolean
Password string

Game
-
Id int PK
InstanceId int PK
RoomID int FK >- Room.Id

Instance
----
InstanceId int FK >- Game.InstanceId
PlayerDataId int FK >- PlayerData.Id


PlayerData
----
Id int PK
PlayerId string FK >- Player.Id
Role string
Choice string #PlayerId
hasChoosen boolean
Status boolean

Player
---
Id int PK
Username string PK
Name string
