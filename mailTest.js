
import { createTransport } from "nodemailer";


const VOLUNTEER_FORM_TEMPLATE = ` <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><!--[if gte mso 9]><xml><o:officedocumentsettings><o:allowpng><o:pixelsperinch>96</o:pixelsperinch></o:officedocumentsettings></xml><![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="x-apple-disable-message-reformatting"><!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><title></title><style type="text/css">@media only screen and (min-width:570px){.u-row{width:550px!important}.u-row .u-col{vertical-align:top}.u-row .u-col-100{width:550px!important}}@media (max-width:570px){.u-row-container{max-width:100%!important;padding-left:0!important;padding-right:0!important}.u-row .u-col{min-width:320px!important;max-width:100%!important;display:block!important}.u-row{width:100%!important}.u-col{width:100%!important}.u-col>div{margin:0 auto}}body{margin:0;padding:0}table,td,tr{vertical-align:top;border-collapse:collapse}p{margin:0}.ie-container table,.mso-container table{table-layout:fixed}*{line-height:inherit}a[x-apple-data-detectors=true]{color:inherit!important;text-decoration:none!important}@media (min-width:0px){.hide-default__display-table{display:table!important;mso-hide:unset!important}}@media (max-width:480px){.hide-mobile{max-height:0;overflow:hidden;display:none!important}}@media (min-width:481px){.hide-desktop{max-height:0;overflow:hidden;display:none!important}}table,td{color:#000}@media (max-width:480px){#u_content_heading_3 .v-font-size{font-size:20px!important}#u_content_heading_3 .v-line-height{line-height:160%!important}#u_content_divider_1 .v-container-padding-padding{padding:6px 20px 14px!important}#u_content_heading_4 .v-font-size{font-size:14px!important}#u_content_text_1 .v-container-padding-padding{padding:3px!important}#u_content_text_1 .v-font-size{font-size:14px!important}#u_column_2 .v-col-padding{padding:10px 0 0!important}#u_content_heading_6 .v-font-size{font-size:13px!important}#u_content_text_2 .v-container-padding-padding{padding:3px!important}#u_content_text_2 .v-font-size{font-size:14px!important}#u_column_3 .v-col-padding{padding:10px 0 0!important}#u_content_heading_7 .v-font-size{font-size:14px!important}#u_content_text_6 .v-container-padding-padding{padding:3px!important}#u_content_text_6 .v-font-size{font-size:14px!important}#u_row_7.v-row-padding--vertical{padding-top:0!important;padding-bottom:0!important}#u_column_7 .v-col-padding{padding:10px 0 0!important}#u_content_heading_8 .v-font-size{font-size:14px!important}#u_content_html_2 .v-container-padding-padding{padding:4px!important}#u_content_html_5 .v-container-padding-padding{padding:4px!important}#u_row_8.v-row-padding--vertical{padding-top:0!important;padding-bottom:0!important}#u_column_8 .v-col-padding{padding:10px 0 0!important}#u_content_heading_10 .v-font-size{font-size:14px!important}#u_content_html_3 .v-container-padding-padding{padding:4px!important}#u_content_html_4 .v-container-padding-padding{padding:4px!important}#u_row_4.v-row-padding--vertical{padding-top:0!important;padding-bottom:0!important}#u_column_4 .v-col-padding{padding:10px 0 0!important}#u_content_heading_9 .v-font-size{font-size:14px!important}#u_content_text_4 .v-container-padding-padding{padding:4px 20px 20px!important}#u_content_text_4 .v-font-size{font-size:14px!important}#u_content_text_4 .v-text-align{text-align:center!important}}</style><!--[if !mso]><!--><link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&display=swap" rel="stylesheet" type="text/css"><!--<![endif]--></head><body class="clean-body u_body" style="margin:0;padding:0;-webkit-text-size-adjust:100%;background-color:#fff;color:#000"><!--[if IE]><div class="ie-container"><![endif]--><!--[if mso]><div class="mso-container"><![endif]--><table style="border-collapse:collapse;table-layout:fixed;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;vertical-align:top;min-width:320px;Margin:0 auto;background-color:#fff;width:100%" cellpadding="0" cellspacing="0"><tbody><tr style="vertical-align:top"><td style="word-break:break-word;border-collapse:collapse!important;vertical-align:top"><!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#fff"><![endif]--><div class="u-row-container v-row-padding--vertical" style="padding:0;background-color:transparent"><div class="u-row" style="Margin:0 auto;min-width:320px;max-width:550px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;background-color:transparent"><div style="border-collapse:collapse;display:table;width:100%;height:100%;background-color:transparent"><!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding:0;background-color:transparent" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:550px"><tr style="background-color:transparent"><![endif]--><!--[if (mso)|(IE)]><td align="center" width="550" class="v-col-padding" style="width:550px;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent" valign="top"><![endif]--><div class="u-col u-col-100" style="max-width:320px;min-width:550px;display:table-cell;vertical-align:top"><div style="height:100%;width:100%!important"><!--[if (!mso)&(!IE)]><!--><div class="v-col-padding" style="box-sizing:border-box;height:100%;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent"><!--<![endif]--><table class="hide-mobile" style="font-family:arial,helvetica,sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 0;font-family:arial,helvetica,sans-serif" align="left"><h1 class="v-text-align v-line-height v-font-size" style="margin:0;color:#ea9816;line-height:180%;text-align:center;word-wrap:break-word;font-size:24px;font-weight:400">🎉Exciting News: We Have a New Volunteer!🎉</h1></td></tr></tbody></table><!--[if !mso]><!--><table id="u_content_heading_3" class="hide-default__display-table hide-desktop" style="display:none;mso-hide:all;font-family:arial,helvetica,sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 0;font-family:arial,helvetica,sans-serif" align="left"><h1 class="v-text-align v-line-height v-font-size" style="margin:0;color:#ea9816;line-height:180%;text-align:center;word-wrap:break-word;font-size:24px;font-weight:400">🎉We Have a New Volunteer!🎉</h1></td></tr></tbody></table><!--<![endif]--><table id="u_content_divider_1" style="font-family:arial,helvetica,sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif" align="left"><table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;table-layout:fixed;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;vertical-align:top;border-top:3px dashed #ea9816;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%"><tbody><tr style="vertical-align:top"><td style="word-break:break-word;border-collapse:collapse!important;vertical-align:top;font-size:0;line-height:0;mso-line-height-rule:exactly;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%"><span>&#160;</span></td></tr></tbody></table></td></tr></tbody></table><table id="u_content_heading_4" style="font-family:arial,helvetica,sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:5px 0 0;font-family:arial,helvetica,sans-serif" align="left"><h1 class="v-text-align v-line-height v-font-size" style="margin:0;color:#ea9816;line-height:140%;text-align:center;word-wrap:break-word;font-family:Cinzel Decorative;font-size:20px;font-weight:700"><strong>Full Name</strong></h1></td></tr></tbody></table><table id="u_content_text_1" style="font-family:arial,helvetica,sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:4px;font-family:arial,helvetica,sans-serif" align="left"><div class="v-text-align v-line-height v-font-size" style="font-family:arial,helvetica,sans-serif;font-size:18px;font-weight:700;color:#475542;line-height:140%;text-align:center;word-wrap:break-word"><p style="line-height:140%"><span style="line-height:19.6px"><strong>Adekeye Temitope Olabosun</strong></span></p></div></td></tr></tbody></table><!--[if (!mso)&(!IE)]><!--></div><!--<![endif]--></div></div><!--[if (mso)|(IE)]><![endif]--><!--[if (mso)|(IE)]><![endif]--></div></div></div><div class="u-row-container v-row-padding--vertical" style="padding:0;background-color:transparent"><div class="u-row" style="Margin:0 auto;min-width:320px;max-width:550px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;background-color:transparent"><div style="border-collapse:collapse;display:table;width:100%;height:100%;background-color:transparent"><!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding:0;background-color:transparent" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:550px"><tr style="background-color:transparent"><![endif]--><!--[if (mso)|(IE)]><td align="center" width="550" class="v-col-padding" style="width:550px;padding:20px 0 0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0" valign="top"><![endif]--><div id="u_column_2" class="u-col u-col-100" style="max-width:320px;min-width:550px;display:table-cell;vertical-align:top"><div style="height:100%;width:100%!important;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0"><!--[if (!mso)&(!IE)]><!--><div class="v-col-padding" style="box-sizing:border-box;height:100%;padding:20px 0 0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0"><!--<![endif]--><table id="u_content_heading_6" style="font-family:arial,helvetica,sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:5px 0 0;font-family:arial,helvetica,sans-serif" align="left"><h1 class="v-text-align v-line-height v-font-size" style="margin:0;color:#ea9816;line-height:140%;text-align:center;word-wrap:break-word;font-family:Cinzel Decorative;font-size:20px;font-weight:700"><strong>Email</strong></h1></td></tr></tbody></table><table id="u_content_text_2" style="font-family:arial,helvetica,sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:4px;font-family:arial,helvetica,sans-serif" align="left"><div class="v-text-align v-line-height v-font-size" style="font-family:arial,helvetica,sans-serif;font-size:18px;font-weight:700;color:#475542;line-height:140%;text-align:center;word-wrap:break-word"><p style="line-height:140%"><span style="line-height:19.6px"><strong>Adekeye.m1603874@st.futminna.edu.ng</strong></span></p></div></td></tr></tbody></table><!--[if (!mso)&(!IE)]><!--></div><!--<![endif]--></div></div><!--[if (mso)|(IE)]><![endif]--><!--[if (mso)|(IE)]><![endif]--></div></div></div><div class="u-row-container v-row-padding--vertical" style="padding:0;background-color:transparent"><div class="u-row" style="Margin:0 auto;min-width:320px;max-width:550px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;background-color:transparent"><div style="border-collapse:collapse;display:table;width:100%;height:100%;background-color:transparent"><!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding:0;background-color:transparent" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:550px"><tr style="background-color:transparent"><![endif]--><!--[if (mso)|(IE)]><td align="center" width="550" class="v-col-padding" style="width:550px;padding:20px 0 0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0" valign="top"><![endif]--><div id="u_column_3" class="u-col u-col-100" style="max-width:320px;min-width:550px;display:table-cell;vertical-align:top"><div style="height:100%;width:100%!important;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0"><!--[if (!mso)&(!IE)]><!--><div class="v-col-padding" style="box-sizing:border-box;height:100%;padding:20px 0 0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0"><!--<![endif]--><table id="u_content_heading_7" style="font-family:arial,helvetica,sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:5px 0 0;font-family:arial,helvetica,sans-serif" align="left"><h1 class="v-text-align v-line-height v-font-size" style="margin:0;color:#ea9816;line-height:140%;text-align:center;word-wrap:break-word;font-family:Cinzel Decorative;font-size:20px;font-weight:700"><strong>Phone Number</strong></h1></td></tr></tbody></table><table id="u_content_text_6" style="font-family:arial,helvetica,sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:4px;font-family:arial,helvetica,sans-serif" align="left"><div class="v-text-align v-line-height v-font-size" style="font-family:arial,helvetica,sans-serif;font-size:18px;font-weight:700;color:#475542;line-height:140%;text-align:center;word-wrap:break-word"><p style="line-height:140%"><span style="line-height:25.2px"><strong>Adekeye Temitope Olabosun</strong></span></p></div></td></tr></tbody></table><!--[if (!mso)&(!IE)]><!--></div><!--<![endif]--></div></div><!--[if (mso)|(IE)]><![endif]--><!--[if (mso)|(IE)]><![endif]--></div></div></div><div id="u_row_7" class="u-row-container v-row-padding--vertical" style="padding:0;background-color:transparent"><div class="u-row" style="Margin:0 auto;min-width:320px;max-width:550px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;background-color:transparent"><div style="border-collapse:collapse;display:table;width:100%;height:100%;background-color:transparent"><!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding:0;background-color:transparent" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:550px"><tr style="background-color:transparent"><![endif]--><!--[if (mso)|(IE)]><td align="center" width="550" class="v-col-padding" style="width:550px;padding:20px 0 0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0" valign="top"><![endif]--><div id="u_column_7" class="u-col u-col-100" style="max-width:320px;min-width:550px;display:table-cell;vertical-align:top"><div style="height:100%;width:100%!important;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0"><!--[if (!mso)&(!IE)]><!--><div class="v-col-padding" style="box-sizing:border-box;height:100%;padding:20px 0 0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0"><!--<![endif]--><table id="u_content_heading_8" style="font-family:arial,helvetica,sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:5px 0 0;font-family:arial,helvetica,sans-serif" align="left"><h1 class="v-text-align v-line-height v-font-size" style="margin:0;color:#ea9816;line-height:140%;text-align:center;word-wrap:break-word;font-family:Cinzel Decorative;font-size:20px;font-weight:700"><strong>Skills</strong></h1></td></tr></tbody></table><table id="u_content_html_2" class="hide-mobile" style="font-family:arial,helvetica,sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0;font-family:arial,helvetica,sans-serif" align="left"><div><style>.button{border:none;text-align:center;text-decoration:none;display:inline-block;cursor:pointer;margin:5px;padding:4px 8px;border-radius:10px;font-size:16px;font-weight:700}ul{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;margin:0;padding:0}li{list-style:none}</style><ul><li><button style="color:#475542;background-color:#fefbf2" class="button">Web Design</button></li><li><button style="color:#475542;background-color:#fefbf2" class="button">Pill Button 2</button></li></ul></div></td></tr></tbody></table><!--[if !mso]><!--><table id="u_content_html_5" class="hide-default__display-table hide-desktop" style="display:none;mso-hide:all;font-family:arial,helvetica,sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0;font-family:arial,helvetica,sans-serif" align="left"><div><style>.button{border:none;text-align:center;text-decoration:none;display:inline-block;cursor:pointer;margin:5px;padding:4px 8px;border-radius:10px}ul{display:flex;justify-content:center;align-items:center;margin:0;padding:0}li{list-style:none}</style><ul><li><button style="font-size:14px;color:#475542;background-color:#fefbf2" class="button">Web Design</button></li><li><button style="font-size:14px;color:#475542;background-color:#fefbf2" class="button">Pill Button 2</button></li></ul></div></td></tr></tbody></table><!--<![endif]--><!--[if (!mso)&(!IE)]><!--></div><!--<![endif]--></div></div><!--[if (mso)|(IE)]><![endif]--><!--[if (mso)|(IE)]><![endif]--></div></div></div><div id="u_row_8" class="u-row-container v-row-padding--vertical" style="padding:0;background-color:transparent"><div class="u-row" style="Margin:0 auto;min-width:320px;max-width:550px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;background-color:transparent"><div style="border-collapse:collapse;display:table;width:100%;height:100%;background-color:transparent"><!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding:0;background-color:transparent" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:550px"><tr style="background-color:transparent"><![endif]--><!--[if (mso)|(IE)]><td align="center" width="550" class="v-col-padding" style="width:550px;padding:20px 0 0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0" valign="top"><![endif]--><div id="u_column_8" class="u-col u-col-100" style="max-width:320px;min-width:550px;display:table-cell;vertical-align:top"><div style="height:100%;width:100%!important;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0"><!--[if (!mso)&(!IE)]><!--><div class="v-col-padding" style="box-sizing:border-box;height:100%;padding:20px 0 0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0"><!--<![endif]--><table id="u_content_heading_10" style="font-family:arial,helvetica,sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:5px 0 0;font-family:arial,helvetica,sans-serif" align="left"><h1 class="v-text-align v-line-height v-font-size" style="margin:0;color:#ea9816;line-height:140%;text-align:center;word-wrap:break-word;font-family:Cinzel Decorative;font-size:20px;font-weight:700"><strong>Area Volunteering</strong></h1></td></tr></tbody></table><table id="u_content_html_3" class="hide-mobile" style="font-family:arial,helvetica,sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0;font-family:arial,helvetica,sans-serif" align="left"><div><style>.button{border:none;text-align:center;text-decoration:none;display:inline-block;cursor:pointer;margin:5px;padding:4px 8px;border-radius:10px;font-size:16px;font-weight:700}ul{display:flex;justify-content:center;align-items:center;margin:0;padding:0}li{list-style:none}</style><ul><li><button style="color:#475542;background-color:#fefbf2" class="button">Web Design</button></li><li><button style="color:#475542;background-color:#fefbf2" class="button">Pill Button 2</button></li></ul></div></td></tr></tbody></table><!--[if !mso]><!--><table id="u_content_html_4" class="hide-default__display-table hide-desktop" style="display:none;mso-hide:all;font-family:arial,helvetica,sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0;font-family:arial,helvetica,sans-serif" align="left"><div><style>.button{border:none;text-align:center;text-decoration:none;display:inline-block;cursor:pointer;margin:5px;padding:4px 8px;border-radius:10px}ul{display:flex;justify-content:center;align-items:center;margin:0;padding:0}li{list-style:none}</style><ul><li><button style="font-size:14px;color:#475542;background-color:#fefbf2" class="button">Web Design</button></li><li><button style="font-size:14px;color:#475542;background-color:#fefbf2" class="button">Pill Button 2</button></li></ul></div></td></tr></tbody></table><!--<![endif]--><!--[if (!mso)&(!IE)]><!--></div><!--<![endif]--></div></div><!--[if (mso)|(IE)]><![endif]--><!--[if (mso)|(IE)]><![endif]--></div></div></div><div id="u_row_4" class="u-row-container v-row-padding--vertical" style="padding:4px;background-color:transparent"><div class="u-row" style="Margin:0 auto;min-width:320px;max-width:550px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;background-color:transparent"><div style="border-collapse:collapse;display:table;width:100%;height:100%;background-color:transparent"><!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding:4px;background-color:transparent" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:550px"><tr style="background-color:transparent"><![endif]--><!--[if (mso)|(IE)]><td align="center" width="550" class="v-col-padding" style="width:550px;padding:20px 0 0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0" valign="top"><![endif]--><div id="u_column_4" class="u-col u-col-100" style="max-width:320px;min-width:550px;display:table-cell;vertical-align:top"><div style="height:100%;width:100%!important;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0"><!--[if (!mso)&(!IE)]><!--><div class="v-col-padding" style="box-sizing:border-box;height:100%;padding:20px 0 0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0"><!--<![endif]--><table id="u_content_heading_9" style="font-family:arial,helvetica,sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:5px 0 0;font-family:arial,helvetica,sans-serif" align="left"><h1 class="v-text-align v-line-height v-font-size" style="margin:0;color:#ea9816;line-height:140%;text-align:center;word-wrap:break-word;font-family:Cinzel Decorative;font-size:20px;font-weight:700"><strong>Availability</strong></h1></td></tr></tbody></table><table id="u_content_text_4" style="font-family:arial,helvetica,sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif" align="left"><div class="v-text-align v-line-height v-font-size" style="font-family:arial,helvetica,sans-serif;font-size:18px;font-weight:700;color:#475542;line-height:140%;text-align:justify;word-wrap:break-word"><p style="line-height:140%"><span style="line-height:19.6px"><strong>I really want to be a part of the NBTI Team, I want to help in organizing our activities </strong></span></p></div></td></tr></tbody></table><!--[if (!mso)&(!IE)]><!--></div><!--<![endif]--></div></div><!--[if (mso)|(IE)]><![endif]--><!--[if (mso)|(IE)]><![endif]--></div></div></div><div class="u-row-container v-row-padding--vertical" style="padding:0;background-color:#ea9816"><div class="u-row" style="Margin:0 auto;min-width:320px;max-width:550px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;background-color:transparent"><div style="border-collapse:collapse;display:table;width:100%;height:100%;background-color:transparent"><!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding:0;background-color:#ea9816" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:550px"><tr style="background-color:transparent"><![endif]--><!--[if (mso)|(IE)]><td align="center" width="550" class="v-col-padding" style="background-color:#ea9816;width:550px;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0" valign="top"><![endif]--><div class="u-col u-col-100" style="max-width:320px;min-width:550px;display:table-cell;vertical-align:top"><div style="background-color:#ea9816;height:100%;width:100%!important;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0"><!--[if (!mso)&(!IE)]><!--><div class="v-col-padding" style="box-sizing:border-box;height:100%;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0"><!--<![endif]--><table style="font-family:arial,helvetica,sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif" align="left"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td class="v-text-align" style="padding-right:0;padding-left:0" align="center"><img align="center" border="0" src="data:image/png;base64,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" alt="" title="" style="outline:0;text-decoration:none;-ms-interpolation-mode:bicubic;clear:both;display:inline-block!important;border:none;height:auto;float:none;width:100%;max-width:122px" width="122"></td></tr></table></td></tr></tbody></table><!--[if (!mso)&(!IE)]><!--></div><!--<![endif]--></div></div><!--[if (mso)|(IE)]><![endif]--><!--[if (mso)|(IE)]><![endif]--></div></div></div><!--[if (mso)|(IE)]><![endif]--></td></tr></tbody></table><!--[if mso]><![endif]--><!--[if IE]><![endif]--></body></html> `

// const tes = ``` THIS SHOULD ALL BE ' " <<-- <-- --> <!--  COMMENTS!!! ```

console.log(VOLUNTEER_FORM_TEMPLATE, "===========LOGGED==========");

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
		html: isHTML ? (VOLUNTEER_FORM_TEMPLATE || "<b><span style='color: red;'>Oops</span> ... No Content Provided<b>") : ""
	});

}