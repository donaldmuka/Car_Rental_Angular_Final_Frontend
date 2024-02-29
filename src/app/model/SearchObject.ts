export class SearchObject{
pickUpDate:Date=new Date();
dropOffDate:Date=new Date(this.pickUpDate.getTime()+1*24*60*60*1000);
budgetValue:number=21
year:number=2000
}