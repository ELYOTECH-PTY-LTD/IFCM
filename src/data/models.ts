
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
    id_cat: number;
    title: string;
    description: string;
    imgsrc: string;
    author: string;
    price: string;
  }
  

  export interface Teaching {
    
    id: number;
    category: string;
    count : number;
    imgsrc: string;
    lessons : TeachingLesson[];

  }


  export interface TeachingLesson {
    
    id: number;
    idcat: number;
    title: string;
    text: string;
    imgsrc: string;
    author: string;
    price: string;
    date : string;
    lock: boolean;
  }

  export interface AppIfcmState {
    propheticmessage : PropheticMessage;
    verseoftoday : VerseOfToday;
    events : Event[];
    shopping: Shopping[];
    shoppingitems: ShoppingItem[];
    teachings: Teaching[];
    lessons: TeachingLesson[];
    loading?: boolean;
  
  }

  export interface PropheticMessage {
    
    id: number;
    date : string;
    title: string;
    text: string;
    author: string;

  }

  export interface VerseOfToday {
    
    id: number;
    verse: string;
    text: string;
    date: string;

  }
 
  