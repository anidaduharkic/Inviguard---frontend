import {ItemDto} from "./item-dto.interface";
import {UserModel} from "./user.model";

export interface OrderDto {

  id: number;
  item: ItemDto;
  user: UserModel;
  numberOrdered: number;
  orderDate: string;

}
