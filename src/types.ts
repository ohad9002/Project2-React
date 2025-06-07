export type NavItem = {
    displayStr: string;
    hrefStr: string;
}


export type Place = {
    Name: string;
    Attraction_Type: string;
    City: string;
}


export type Product = {
    prodName: string,
    prodPrice: number
}

export type ProductExtended = {
    prodName: string,
    prodPrice: number,
    description: string,
    imgUrl: string
}

export type Customer = {
    id: number,
    phoneNo: string,
    customerName: string,
    address: string
}

//----------------------------------
const SignupData = {
    firstname: "",
    lastname: "",
    password: "",
    phone: "",
    email: "",
    birthdate: "",
}

export type myFormFields = keyof typeof SignupData;
//----------------------------------
// export type myFormFields =
//     "firstname" |
//     "lastname" |
//     "password" |
//     "phone" |
//     "email" |
//     "birthdate";
//----------------------------------