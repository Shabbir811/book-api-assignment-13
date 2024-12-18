
import Image, { StaticImageData } from "next/image";

import book1 from "@/app/assets/book-1premium_photo-1682255271649-866ebf8873d1.avif"
import book2 from "@/app/assets/book-2premium_photo-1718303673913-5c765682b54c.avif"
import book3 from "@/app/assets/book-3premium_photo-1718303728423-507cbf6d7df4.avif"
import book4 from "@/app/assets/book-4photo-1459369510627-9efbee1e6051.avif"
import book5 from "@/app/assets/book-5photo-1511108690759-009324a90311.avif"
import book6 from "@/app/assets/book-6premium_photo-1683133333081-452251d2a031.avif"
import Link from "next/link";


async function Product(
    { params }: {
        params: {
            id: number
        }
    }
) {
    const url = await fetch("https://simple-books-api.glitch.me/books")
    const data = await url.json()

    const setImages = [
        { img: book1, id: 1 },
        { img: book2, id: 2 },
        { img: book3, id: 3 },
        { img: book4, id: 4 },
        { img: book5, id: 5 },
        { img: book6, id: 6 }

    ]


    return (
        < div className="flex flex-col sm:flex-row justify-center py-28 px-20 gap-12 flex-wrap" >
            {
                data.map(
                    (book: {
                        id: number,
                        name: string,
                        type: string,
                        available: boolean
                    }) => (

                        params.id == book.id &&
                        <div className="max-w-sm w-[345px] bg-white rounded-lg shadow-md overflow-hidden">

                            {/* . Book Image . */}
                            {
                                setImages.map(
                                    (img) => (
                                        book.id === img.id && (
                                            <Image
                                                src={img.img}
                                                alt="Book Cover"
                                                className="w-full h-48 object-cover"
                                            />
                                        )
                                    )
                                )

                            }

                            {/* . Card Content . */}
                            <div className="p-4" key={book.id} >
                                {/* . Title . */}
                                <h2 className="text-lg font-semibold text-gray-800">{book.name}</h2>
                                {/* . Author . */}
                                <p className="text-sm text-gray-500">by GHULAM SHABBIR</p>
                                {/* . Price . */}
                                <div className="mt-3 flex flex-col items-center justify-between">
                                    <span className="text-xl font-bold text-gray-800">$14.99</span>
                                    <span className="text-xl font-bold text-gray-800"> Genre: {book.type}</span>
                                    <span
                                        className="text-xl font-bold text-gray-800 flex gap-1 items-center">
                                        Available: {book.available && (
                                            <h5 className="h-6 w-6 rounded-full bg-green-600"></h5>
                                        )}
                                    </span>
                                    {/* . Button . */}
                                    <button
                                        className={
                                            `px-4 py-2 text-sm font-semibold text-white ${book.available ? "bg-blue-600" : "bg-slate-600"} rounded ${book.available ? "hover:bg-blue-500" : "hover:bg-slate-500"}`
                                        }>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                            <Link href={"/"}
                                className={
                                    `px-4 py-2 text-sm font-semibold text-white bg-green-600  rounded hover:bg-green-500`
                                }>
                                Back To Home
                            </Link>
                        </div>
                    )


                )
            }

        </div>

    )
}

export default Product
