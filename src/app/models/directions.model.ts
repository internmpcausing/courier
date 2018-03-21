export interface ILatLng{
    label?: string,
    lat: number,
    lng: number
}

export interface IDirections{
    origin: ILatLng,
    destination: ILatLng
}