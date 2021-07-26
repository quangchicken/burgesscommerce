import React from "react"
import { useForm } from "react-hook-form"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { REGEX_EMAIL } from "../lib/common"

export const Mailchimp = ({
  label = "Let’s Talk",
  btnClass = "",
  placeholder = "Phone or email address",
  textType = "light",
  showThanks = false,
  showText = false,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  return (
    <MailchimpSubscribe
      url={process.env.GATSBY_ACCESS_MAILCHIMP}
      render={({ subscribe, status, message }) => (
        <>
          <form
            className={errors.email ? "error" : ""}
            onSubmit={handleSubmit(data => {
              subscribe({
                EMAIL: data.email,
                NAME: data.email,
              })
            })}
          >
            <div className="actions">
              <input
                {...register("email", {
                  required: "Email address is required",
                  pattern: {
                    value: REGEX_EMAIL,
                    message: "Incorrect format email",
                  },
                })}
                type="email"
                placeholder={placeholder}
                id="newsletter-email"
                autoCorrect="off"
                autoCapitalize="off"
                className={`required ${status}`}
              />
              <button
                type="submit"
                name="commit"
                className={`button ${btnClass}`}
              >
                {label}
              </button>
            </div>
            {errors.email && (
              <small style={{ color: "#ff0000" }}>{errors.email.message}</small>
            )}
            {status && (
              <span dangerouslySetInnerHTML={{ __html: message }}></span>
            )}

            <p className={`text-${textType}`}>
              {showThanks && <strong>Thank you! </strong>}
              I’ll give you a call or email reply shortly to discuss your
              project
            </p>
          </form>
        </>
      )}
    />
  )
}
