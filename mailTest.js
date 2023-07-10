
import { createTransport } from "nodemailer";

const transporter = createTransport({
	service: 'gmail',
	auth: {
		user: Deno.env.get('MAIL_ADDRESS'),
		pass: Deno.env.get('APP_PASSWORD'),
	}
});


// async..await is not allowed in global scope, must use a wrapper
async function main() {
	// send mail with defined transport object
	// const info = await transporter.sendMail({
	// 	from: '"Form Test Two 👻" <bitrusjospeh@gmail.com>', // sender address
	// 	to: "Temhithorpe@gmail.com, josephbitrus62@gmail.com", // list of receivers
	// 	subject: "Hello Immortal!!", // Subject line
	// 	text: "Hello world?", // plain text body
	// 	html: "<b>Hello world?</b>", // html body
	// });

	const info = await sendMail();

	console.log("Message sent: %s", info);
	// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

	//
	// NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
	//       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
	//       <https://github.com/forwardemail/preview-email>
	//
}

main().catch(console.error);


async function sendMail(subject, body, from, to, isHTML = true) {

	// send mail with defined transport object
	return await transporter.sendMail({

		// sender address
		from: from || '"Form Test Two 👻" <bitrusjospeh@gmail.com>',

		// list of receivers
		to: to || "Temhithorpe@gmail.com, josephbitrus62@gmail.com",

		// Subject line
		subject: subject || "Hello Immortal!!",

		// plain text body
		text: isHTML ? "" : (body || "Oops ... No Content Provided"),

		// html body
		html: isHTML ? (body || "<b><span style='color: red;'>Oops</span> ... No Content Provided<b>") : ""
	});

}