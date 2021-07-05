
  export interface Event {
    
    id: number;
    src: string;
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
    items : ShoppingItem[];
    count : number;

  }


  export interface ShoppingItem {
    
    id: number;
    title: string;
    description: string;
    src: string;
    author: string;
    price: string;
  }
  

  export interface Teaching {
    
    id_cat: number;
    category: string;
    lessons : TeachingLesson[];
    count : number;

  }


  export interface TeachingLesson {
    
    id: number;
    title: string;
    text: string;
    src: string;
    author: string;
    price: string;
    lock : string;
  }

  export interface AppIfcmState {
    events : Event[];
    shopping: Shopping[];
    shoppingitems: ShoppingItem[];
    teachings: Teaching[];
    lessons: TeachingLesson[];
    loading?: boolean;
  
  }


 
  