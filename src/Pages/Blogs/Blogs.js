import React, { useEffect } from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';

const Blogs = () => {

    //scroll to the top on render
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //rendering blogs component here
    return (
        <section className='bg-byteware-light-gray'>
            <PageTitle title={'Blogs'} />
            <div className='w-4/5 mx-auto py-10'>
                <h3 className='text-left font-semibold text-4xl mb-10'>Questions & Answers</h3>
                <div className='text-left border-2 border-byteware-base-red p-5 rounded-2xl my-10 bg-white shadow-xl'>
                    <h4 className='font-bold text-xl text-gray-400'>Q1. What is the difference between JavaScript & Node JS ?</h4>
                    <p className='mt-3'><strong>Answer:</strong> JavaScript is a simple programming language that runs in any browser JavaScript Engine. On the other hand, Node JS is an interpreter or running environment for JavaScript programming language. JavaScript is usually used for client-side activity such as making the website dynamic. But Node Js is used for server-side processes. JavaScript follows Java programming language standards but there is a little bit of difference on the term of writing the code. Whereas Node JS is written in C++ and provides a browser JavaScript running engine.</p>
                </div>
                <div className='text-left border-2 border-byteware-base-red p-5 rounded-2xl my-10 bg-white shadow-xl'>
                    <h4 className='font-bold text-xl text-gray-400'>Q2. When should we use Node JS and when should we use MongoDB ?</h4>
                    <p className='mt-3'>
                        <strong>Answer: Node JS</strong> is a JavaScript engine that provides us the ability to build a server that can respond to web requests. So, if a project requires a server or programming environment and a runtime library which can compile or interpret codes, We need to use Node JS there. There are some similar languages to do the task such as <strong>Python, Java, PHP, C#, C++, Go etc.</strong>
                        <br />
                        <strong>MongoDB</strong> is a database engine which has the ability to persistently store data that can be queried and used or updated later. If a project requires storing data for future use, then we can use MongoDB. There are some other database engines to do the task such as <strong>MariaDB, MySql, AWS, Postgres etc.</strong>
                    </p>
                </div>
                <div className='text-left border-2 border-byteware-base-red p-5 rounded-2xl my-10 bg-white shadow-xl'>
                    <h4 className='font-bold text-xl text-gray-400'>Q3. What is the difference between SQL & NoSQL databases ?</h4>
                    <p className='mt-3'><strong>Answer:</strong> SQL databases use RDBMS or Relational Database Management System and thus SQL databases are relational. On the other hand, NoSQL databases do not use RDBMS and so NoSQL databases are non-relational. SQL databases use Structured Query Language(SQL) and have a predefined schema but NoSQL databases have dynamic schemas as the do not use Structured Query Language(SQL). SQL databases can be scaled vertically whereas NoSQL databases can be scaled horizontally. SQL databases are table-based database while NoSQL databases are based on documents, key-value, graph etc. These are the common differences between SQL and NoSQL databases.</p>
                </div>
                <div className='text-left border-2 border-byteware-base-red p-5 rounded-2xl my-10 bg-white shadow-xl'>
                    <h4 className='font-bold text-xl text-gray-400'>Q4. What is the purpose of JWT and how does it work ?</h4>
                    <p className='mt-3'><strong>Answer: JWT </strong> or <strong>JSON Web Token</strong> is an open standard and is used for sharing security information between two parties, mainly between the client and the server. JWTs are created using cryptographic algorithm to ensure that the token can not be altered after issuing it. Each encoded JWT contains three parts <strong>Header, Payload and Verify Signature</strong>.The header contains metadata of the token whereas the Payload contains sophisticated data that needs to be secured.The verify signature contains a secret code.When the JWT is provided to the back-end from the front-end along with the data that needs to be checked, the back-end decodes the JWT using the verify signature and matches the payload with given data and checks whether the provided data matches with the payload or not. This is how JWT works.</p>
                </div>
            </div>
        </section>
    );
};

export default Blogs;