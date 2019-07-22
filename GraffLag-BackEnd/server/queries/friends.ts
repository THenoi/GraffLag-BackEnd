import { ProfilePage } from './../../../../GraffLag/src/app/profile/profile.page';
import { IFriend } from './../../../../GraffLag/src/app/interfaces/IFriend';


import { Friends, FriendsRequest } from './../models/model';
import { Op } from 'sequelize';

export function getAllFriendsRequestQuery(userid: number) {
    return FriendsRequest.findAll({ where: { toid: userid } }).then((data) => data);
}
export function getAllFriendsQuery(userid: number) {
    return Friends.findAll({ where: { [Op.or] : [{toid: userid },{atid:userid}]} }).then((data) => data);
}
export function deleteFriendQuery(data:any) {
    return Friends.destroy({ where: { [Op.or] : [{toid: data.userid },{atid:data.userid}], [Op.or] : [{toid: data.profileid },{atid:data.profileid}]} }).then((data) => data);
}
export function AcceptFriendRequestQuery(data: IFriend) {
   
    FriendsRequest.destroy({ where: {[Op.or]:[ {toid: data.toid},{atid:data.atid} ]} }).then((data) => data);

    return Friends.create(
        {
            atid: data.atid,
            toid: data.toid,
        }
    ).then((data) => data);
}
