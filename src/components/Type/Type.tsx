export type HeaderType = {
    id: string;
    nameTitle: string;
    currentState: boolean;
}

export type TodoType = {
    id: string;
    name: string;
    iscomplete: boolean;
}

export type MonsterType = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
}