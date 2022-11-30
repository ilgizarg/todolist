import {AuthUserInterface} from '../../profile/share/interface/user.interface';

export class AuthUser implements AuthUserInterface {
  id = 1;
  token = 'asdasdsd asd asd';
  uuid = 'asd234fdsMock';
  username = 'UserMock';
  firstname = 'FirstnameMock';
  lastname = 'LastnameMock';
  email = 'email@mockemail.ru';
  phone = '+7987 765 43 21';
  avatar = 'userMock.png';
  thumbnail = 'userThumbnail.png';
}
