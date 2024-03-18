import "./property.css";

const PropertyList = () => {
    const itemList = [
        {
            picture: "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
            name: "Khách sạn",
            number: 123
        },
        {
            picture: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/bc/94/50/1941m-homestay-ta-xua.jpg?w=700&h=-1&s=1",
            name: "Home stay",
            number: 123
        },
        {
            picture: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/500942377.jpg?k=caf55521810da15df5a21b76cb3eb4d01a5495b493a1134dcf89f25c2aa73ff5&o=&hp=1",
            name: "Villas",
            number: 123
        },
        {
            picture: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10021237-1052x595-FIT_AND_TRIM-a6fe6081288a576915d553247822ec07.jpeg?tr=q-40,c-at_max,w-740,h-500&_src=imagekit",
            name: "Resorts",
            number: 123
        },
        {
            picture: "https://imagetravel.vn/wp-content/uploads/2023/09/camping-bbq-2-1024x575.gif",
            name: "Camping",
            number: 123
        },
    ]
    return (
        <div>
            <h2 className="title">Loại chỗ nghỉ</h2>
            <div className="pList">
                {itemList.map(item => {
                    return (
                        <div className="pListItem">
                            <img
                                src={item.picture}
                                alt=""
                                className="pListImg"
                            />
                            <div className="pListTitles">
                                <h1>{item.name}</h1>
                                <h2>{item.number} địa điểm</h2>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default PropertyList;