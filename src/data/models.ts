
  export interface Event {
    
    id: number;
    imgsrc: string;
    title: string;
    date: string;
    shortdesc: string;
    description: string;
    location: string;
    address: string;
    price: string;
  }
  

  export interface Shopping {
    
    id_cat: number;
    category: string;
    count : number;
    items : ShoppingItem[];

  }


  export interface ShoppingItem {
    
    id: number;
    title: string;
    description: string;
    imgsrc: string;
    author: string;
    price: string;
  }
  

  export interface Teaching {
    
    id_cat: number;
    category: string;
    count : number;
    lessons : TeachingLesson[];

  }


  export interface TeachingLesson {
    
    id: number;
    title: string;
    text: string;
    imgsrc: string;
    author: string;
    price: string;
    lock?: boolean;
  }

  export interface AppIfcmState {
    events : Event[];
    shopping: Shopping[];
    shoppingitems: ShoppingItem[];
    teachings: Teaching[];
    lessons: TeachingLesson[];
    loading?: boolean;
  
  }


 
  