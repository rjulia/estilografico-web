import React from 'react'
import { Formik, FieldArray } from 'formik';
import '../contact.scss'

const Form = () => {

  const servicesCollection = [
    { value: "web", label: "Página web" },
    { value: "branding", label: "Branding / Creación de marca" },
    { value: "catalogo", label: "Catálogo" },
    { value: "rotulo", label: "Rótulo / Rotulación" },
    { value: "senaletica", label: "Señalética" },
    { value: "video", label: "Video" },
    { value: "packaging", label: "Packaging" },
    { value: "catalogo", label: "Catálogo" },
    { value: "expositores", label: "Expositores y Carteles" },
  ];


  return (
    <Formik
      initialValues={{
        name: '',
        telephone: '',
        comments: '',
        services: [],
        accept: false,
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
        if (values.services.length <= 0) {
          errors.services = 'Tiene al menos que selccionar un campo';
        }
        if (!values.accept) {
          errors.accept = 'Tiene que aceptar las condiciones de aviso legal';
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
              <div className='box-input'>
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
              <div className='box-input'>
                <label>¿Qué servicios buscas?*</label>
                <FieldArray
                  name="services"
                  render={arrayHelpers => (
                    <div>
                      {servicesCollection.map(service => {
                        console.log(service, values)
                       return (
                       <label key={service.value} className="checkbox-contact">
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
                          <p>{service.label}</p>
                        </label>
                       )
                    })}
                    </div>
                  )}
                />
                <span>{errors.services && touched.services && errors.services}</span>
              </div>
              <div className='box-input'>
                <label className="checkbox-contact">
                  <input
                    name="accept"
                    type="checkbox"
                    value={values.accept}
                    checked={values.accept}
                    onChange={handleChange}
                  />
                  <p>Acepto las condiciones del Aviso legal</p>
                </label>
                <span>{errors.accept && touched.accept && errors.accept}</span>
              </div>
            </div>
            <div className='right-form'>
              <div className='box-input'>
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
              <div className='box-input'>
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