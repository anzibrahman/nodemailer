const nodemailer=require('nodemailer');


async function main()
    {
        const transporter =nodemailer.createTransport({
            host:'ruksanaanzib@gmail.com',
            port:465,
            secure:true,
            auth:{
                user:'ruksanaanzib@gmail.com',
                pass:'fvoa vyqz hqef tkzv'
            }
        });
    const info=await transporter.sendMail({
        from:' ruksana<ruksanaanzib@gmail.com>',
        to:'anziballianze@gmail.com',
        subject:'nodemailer sending',
        html:"<p>hello world</p>",

    })
console.log("meassage sent:"- + info.messageId);   
}
main()
.catch(e=>console.log(e));
