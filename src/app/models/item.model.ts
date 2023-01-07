export interface Item {
  userId: string;
  id: string;
  titleId: string;
}

export interface ItemComposed {
  id: string;
  userId: string;
  titleId: string;
  title: string; 
}