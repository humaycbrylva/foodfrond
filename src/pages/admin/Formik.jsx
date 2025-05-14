import React from 'react';
import { useDispatch } from 'react-redux';
import { postProductThunk} from '../../redux/reducers/productSlice';
import styles from './Admin.module.css';
import Admin from './Admin';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Formik = () => {
  const dispatch = useDispatch();
  


  const validationSchema = Yup.object({
    image: Yup.string()
      .url('Geçərli bir şəkil URL-si daxil edin')
      .required('Şəkil linki boş ola bilməz'),
    title: Yup.string()
      .min(3, 'Başlıq ən azı 3 simvol olmalıdır')
      .required('Başlıq boş ola bilməz'),
    price: Yup.string()
      .min(5, 'price mutleq yazilmalidir')
      .required('price hissəsi boş ola bilməz'),
  });

  const formik = useFormik({
    initialValues: {
      image: '',
      price: '',
      title: '',
    },
    validationSchema,
    onSubmit: (data) => {
      dispatch(postProductThunk(data));
      formik.resetForm();
    }
  });

  const handleEdit = (item) => {
    setEditItemId(item._id);
    formik.setValues({
      image: item.image || '',
      price: item.price || '',
      title: item.title || '',
      
    });
  };

  return (
    <div className={styles.formsdivs}>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.forms}>

         
          <div className={styles.inputGroup}>
            {formik.touched.image && formik.errors.image && (
              <div className={styles.error}>{formik.errors.image}</div>
            )}
            <input
              className={styles.title}
              id="image"
              name="image"
              type="text"
              placeholder="Image"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.image}
            />
          </div>


          <div className={styles.inputGroup}>
            {formik.touched.achievment && formik.errors.achievment && (
              <div className={styles.error}>{formik.errors.achievment}</div>
            )}
            <input
              className={styles.desc}
              id="price"
              name="price"
              type="text"
              placeholder="price"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
            />
          </div>

         
          <div className={styles.inputGroup}>
            {formik.touched.title && formik.errors.title && (
              <div className={styles.error}>{formik.errors.title}</div>
            )}
            <input
              className={styles.title}
              id="title"
              name="title"
              type="text"
              placeholder="Title"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
            />
          </div>

          
          <button className={styles.btn} type="submit">
           Add
          </button>

          
        </div>
      </form>


      <Admin handleEdit={handleEdit} />
    </div>
  );
};

export default Formik;
