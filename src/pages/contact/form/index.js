import React from 'react'
import { Formik, FieldArray } from 'formik';
import '../contact.scss'

const Form = () => {

  const servicesCollection = [
    { value: "one", label: "One" },
    { value: "two", label: "Two" },
    { value: "three", label: "Three" }
  ];


  return (
    <Formik
      initialValues={{
        name: '',
        telephone: '',
        comments: '',
        services: ['']
      }}
      validateOnChange={true}
      validate={values => {
        const errors = {};
        if (!values.name) {
          errors.name = 'El nombre es requerido';
        }
        if (!values.telephone) {
          errors.telephone = 'El teléfono es requerido';
        }
        console.log(errors);
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <div className='left-form'>
              <div className='box-imput'>
                <label>Nombre completo*</label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <span>{errors.name && touched.name && errors.name}</span>
              </div>
              <div className='box-imput'>

                <FieldArray
                  name="services"
                  render={arrayHelpers => (
                    <div>
                      {servicesCollection.map(service => {
                        console.log(service, values)
                       return (<label key={service.value}>
                          <input
                            name="services"
                            type="checkbox"
                            value={service}
                            checked={values.services.includes(service.value)}
                            onChange={e => {
                              if (e.target.checked) {
                                arrayHelpers.push(service.value);
                              } else {
                                const idx = values.services.indexOf(service.value);
                                arrayHelpers.remove(idx);
                              }
                            }}
                          />
                          <span>{service.label}</span>
                        </label>
                       )
                    })}
                    </div>
                  )}
                />
              </div>
            </div>
            <div className='right-form'>
              <div className='box-imput'>
                <label>Teléfono*</label>
                <input
                  type="text"
                  name="telephone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.telephone}
                />
                <span>{errors.telephone && touched.telephone && errors.telephone}</span>
              </div>
              <div className='box-imput'>
                <label>Comentario (Breve descripción)</label>
                <input
                  type="text"
                  name="comments"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.comments}
                />
              </div>

            </div>

          </div>
          <button
            className='button-send-form'
            type="submit"
            disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  )
}

export default Form
