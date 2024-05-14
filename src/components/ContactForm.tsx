import { FunctionComponent } from "react";
import { Text, Input, CommentBox, Button } from "@cencosud/parallel";
import styles from "./ContactForm.module.css";

const ContactForm: FunctionComponent = () => {
  return (
    <div className={styles.form}>
      <div className={styles.titlecontent}>
        <Text className={styles.rectangle} variant="h1" />
        <Text className={styles.rectangle} />
      </div>
      <div className={styles.inputscontainer}>
        <Input className={styles.rectangle2} label="Label" />
        <Input className={styles.rectangle2} label="Label" />
        <CommentBox
          label="Comentario adicional"
          placeholder="Escribe los comentarios adicionales"
          value=""
        />
      </div>
      <div className={styles.action}>
        <Button hierarchy="primary" label="Button" />
      </div>
    </div>
  );
};

export default ContactForm;
