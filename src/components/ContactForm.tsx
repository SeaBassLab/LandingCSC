import { FunctionComponent } from "react";
//TODO: Add Import for Storybook Text component
//TODO: Add Import for Storybook Input component
//TODO: Add Import for Storybook CommentBox component
//TODO: Add Import for Storybook V component
import styles from "./ContactForm.module.css";

const ContactForm: FunctionComponent = () => {
  return (
    <div className={styles.form}>
      <div className={styles.titlecontent}>
        <Text className={styles.rectangle} variant="h1" className="" />
        <Text className={styles.rectangle} className="" />
      </div>
      <div className={styles.inputscontainer}>
        <Input
          className={styles.rectangle2}
          label="Label"
          className=""
          value=""
          placeholder=""
          width=""
          helperText=""
          type=""
          id=""
          name=""
          min=""
          max=""
          pattern=""
        />
        <Input
          className={styles.rectangle2}
          label="Label"
          className=""
          value=""
          placeholder=""
          width=""
          helperText=""
          type=""
          id=""
          name=""
          min=""
          max=""
          pattern=""
        />
        <CommentBox
          className={styles.rectangle4}
          label="Comentario adicional"
          placeholder="Escribe los comentarios adicionales"
          value=""
        />
      </div>
      <div className={styles.action}>
        <V className={styles.rectangle5} hierarchy="primary" label="Button" />
      </div>
    </div>
  );
};

export default ContactForm;
