import {Formik, Form, Field, ErrorMessage} from 'formik'
import { useContext } from 'react';
import { NotesContext } from '../context/NotesContext';

function NotesForm(){
    const {add} = useContext(NotesContext);
    return(
        <Formik
            initialValues={{title: "", body:""}}
            validate={values => {
                const errors = {};
                if(!values.title){
                    errors.title = "El título es requerido"
                }
                if(!values.body){
                    errors.body = "El mensaje es requerido"
                }
                return errors;
            }}
            onSubmit={
                (values, {setSubmitting}) => {
                    add(values.title, values.body);
                    setSubmitting(false);
                    values.title = ""
                    values.body = ""
                }
        }
        >
            {
                ({ isSubmitting })=>(
                    <Form className='form'>                
                        <div>
                            <label htmlFor="title">Título</label>
                            <Field type="text" name="title" />
                            <ErrorMessage name="title" component="div" />
                        </div>
                        <div>
                            <label htmlFor="body">Qué quieres guardar</label>
                            <Field as="textarea" name="body" />
                            <ErrorMessage name="body" component="div" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Guardando Nota..." : "Guardar Nota"}
                        </button>
                    </Form>
                )
            }
        </Formik>
    )
}

export default NotesForm;