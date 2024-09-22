import { FormContact } from '@/components/FaleConosco';

export function handleHTMLFormContact(body: FormContact) {
  return `
  <span
    className="preheader"
    style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;"
  >
    Mensagem Blocok
  </span>
  <table
    role="presentation"
    border="0"
    cellPadding="0"
    cellSpacing="0"
    className="body"
    style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f6f6f6; width: 100%;"
    width="100%"
    // bgcolor="#f6f6f6"
  >
    <tr>
      <td
        style="font-family: sans-serif; font-size: 14px; vertical-align: top;"
        valign="top"
      >
        &nbsp;
      </td>
      <td
        className="container"
        style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 580px; padding: 10px; width: 580px; margin: 0 auto;"
        width="580"
        valign="top"
      >
        <div
          className="content"
          style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 580px; padding: 10px;"
        >
          <table
            role="presentation"
            className="main"
            style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border-radius: 3px; width: 100%;"
            width="100%"
          >
            <tr>
              <td
                className="wrapper"
                style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;"
                valign="top"
              >
                <table
                  role="presentation"
                  border="0"
                  cellPadding="0"
                  cellSpacing="0"
                  style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;"
                  width="100%"
                >
                  <tr style="background-color: white; border-bottom: 2px solid #3AA7E0; height: auto; display: table; width: 100%">
                    <td style="text-align: center; padding-top: 25px; padding-bottom: 25px;">
                      <img src="https://blocok.vercel.app/logo-preta.png" alt="Blocok" width="120" height="auto" />
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="font-family: sans-serif; font-size: 14px; vertical-align: top;"
                      valign="top"
                    >
                      <p style="font-family: sans-serif; font-size: 20px; font-weight: bold; margin: 0; margin-top:25px; margin-bottom: 20px;color:#3AA7E0; ">
                        Olá, Equipe Blocok
                      </p>
                      <p style="font-family: sans-serif; color:#000; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 20px;">
                        Temos uma nova mensagem do nosso site!
                      </p>
                      <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px; color: #000">
                        Nome: <b>${body.nome}</b>
                      </p>
                      <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px; color: #000">
                        Telefone: 
                        <a 
                        href="https://wa.me/${body.celular.replace(/\D/g, '')}"
                        target="_blank"
                        style="color:#3AA7E0; font-weight:bold">
                          ${body.celular}
                        </a>
                      </p>
                      <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px; color: #000">
                        E-mail:
                        <a
                          href="mailto:${body.email}"
                          target="_blank"
                          style="color:#3AA7E0; font-weight:bold"
                        >
                          ${body.email}
                        </a>
                      </p>
                    <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px; color: #000">
                      Endereço: <b>${body.bairro}</b><br />
                      Cidade: <b>${body.cidade} - ${body.estado}</b><br />
                      CEP: <b>${body.cep}</b><br />
                    </p>
                    <hr style="margin-bottom: 15px" />
                
                      <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px; color: #000">
                        Mensagem:
                        <b>${body.mensagem}</b>
                      </p>
                      <a
                        href="www.Blocok.com.br"
                        style="color:#3AA7E0; display:table; margin-top:50px; font-size:14px; width:100%; text-align:left; font-weight:bold; text-decoration: none;"
                        target="_blank"
                      >
                        Blocok
                      </a>
                      <p style="font-size:12px; color:#999999">
                        endereço entra aqui
                      </p>
                      <p style="font-size:12px; color:#999999; font-weight: bold">
                        <a
                          href="http://api.whatsapp.com/send?1=pt_BR&phone="
                          target="_blank"
                          style="text-decoration: none; color:#999999; font-weight: bold"
                        >
                          222222222
                        </a>
                        /
                        <a
                          href="http://api.whatsapp.com/send?1=pt_BR&phone=222222"
                          target="_blank"
                          style="text-decoration: none; color:#999999; font-weight: bold"
                        >
                          22222222
                        </a>
                      </p>
                    </td>
                  </tr>
                  <tr style="background-color: white; border-top: 2px solid #3AA7E0; height: auto; margin-top: 15px; width: 100%; display: table;">
                    <td style="padding: 25px; padding-bottom: 25px;">
                      <p style="color: black; font-size: 16px; font-weight: bold;">
                        Entre em contato:
                      </p>
                      <a
                        href="http://api.whatsapp.com/send?1=pt_BR&phone=22222"
                        target="_blank"
                        style="text-decoration: none; margin-right: 6px;"
                      >
                        <img
                          width="25px"
                          src="https://www.Blocok.com.br/email/whatsapp.png"
                          alt="WhatsApp"
                        />
                      </a>
                      <a
                        href="https://www.instagram.com/Blocok.ecommerce"
                        target="_blank"
                        style="text-decoration: none; margin-right: 6px;"
                      >
                        <img
                          width="25px"
                          src="https://www.Blocok.com.br/email/instagram.png"
                          alt="Instagram"
                        />
                      </a>
                      <a
                        href="https://www.facebook.com/Blocok.ecommerce"
                        target="_blank"
                        style="text-decoration: none; margin-right: 6px;"
                      >
                        <img
                          width="25px"
                          src="https://www.Blocok.com.br/email/facebook.png"
                          alt="Facebook"
                        />
                      </a>
                    </td>
                    <td style="padding: 25px; padding-bottom: 25px; text-align: right;">
                      <a
                        href="https://www.Blocok.com.br/"
                        target="_blank"
                      >
                      <img
                        src="https://blocok.vercel.app/logo-preta.png"
                        alt="Blocok"
                        style="width: 80px;"
                      />
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <div
            className="footer"
            style="clear: both; margin-top: 10px; text-align: center; width: 100%;"
          >
            <table
              role="presentation"
              border="0"
              cellPadding="0"
              cellSpacing="0"
              style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;"
              width="100%"
            >
              <tr>
                <td
                  className="content-block"
                  style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #999999; font-size: 12px; text-align: center; padding-left: 45px; padding-right: 45px;"
                  valign="top"
                  align="center"
                >
                  O conteúdo deste e-mail é confidencial e destinado
                  exclusivamente ao destinatário especificado apenas na
                  mensagem. É estritamente proibido compartilhar qualquer
                  parte desta mensagem com terceiros, sem o consentimento
                  por escrito do remetente. Se você recebeu esta mensagem
                  por engano, responda a esta mensagem e siga com sua
                  exclusão, para que possamos garantir que tal erro não
                  ocorra no futuro.
                </td>
              </tr>
            </table>
          </div>
        </div>
      </td>
      <td
        style="font-family: sans-serif; font-size: 14px; vertical-align: top;"
        valign="top"
      >
        &nbsp;
      </td>
    </tr>
  </table>
  `;
}
