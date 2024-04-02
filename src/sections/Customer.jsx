import React from 'react';
import CustomerCard from '../component/CustomerCard'
import quote from '../assets/quote.jpeg'

export const customers = [
    {
        imgURL: quote,
        review: "I can't get enough of Foot Form shoes! The attention to detail in every pair is evident. They're not just shoes; they're wearable art. Plus, the compliments I receive whenever I wear them are just the cherry on top!",
        name: "Michael Patel",
    },
    {
        imgURL: quote,
        review: "Absolutely stunning! The heels from Foot Form are a dream come true. Not only are they exquisitely crafted, but they're also surprisingly comfortable. I feel like a queen every time I wear them.",
        name: "Emily Johnson",
    },
    {
        imgURL: quote,
        review: "Foot Form has raised the bar for luxury footwear. I recently purchased a pair of their fashion heels, and I must say, I've never felt more confident. The quality is exceptional, and they make any outfit stand out effortlessly.",
        name: "Samantha Nguyen",
    },
];

const Customer = () => {
    return (
        <section className="grid-rows-5 justify-center items-center p-16">
            <div className='row-span-1 flex justify-center items-center'>
                <h1 className='text-[Montserrat] text-4xl' style={{ fontWeight: '500', lineHeight: '49px', letterSpacing: '0em', }}>
                    Customers Reviews
                </h1>
            </div>

            <div className="row-span-1 flex flex-row justify-center items-center gap-2 py-6">
                <ul  className='row-span-3 grid md:grid-cols-3 gap-8 md:gap-12 p-20 top-96'>
                    {customers.map((customer, index) => (
                        <CustomerCard
                            key={index}
                            imgURL={customer.imgURL}
                            review={customer.review}
                            name={customer.name}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Customer;
