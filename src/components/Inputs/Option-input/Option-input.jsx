import { PropTypes } from "prop-types";
import "./Option-input.scss";

export const OptionInput = ({ id, label, classInp }) => {
  const region = [
    "Qashqadaryo_Viloyati",
    "Toshkent_Viloyati",
    "Andijon_Viloyati",
    "Buxoro_Viloyati",
    "Jizzax_Viloyati",
    "Navoiy_Viloyati",
    "Samarqand_Viloyati",
    "Surxandaryo_Viloyati",
    "Sirdaryo_Viloyati",
    "Toshkent-Shahri",
    "Xorazim_Viloyati",
    "Farg'ona_Viloyati",
    "Qoraqalpog'iston-Respublikasi",
  ];

  const regions = {
    Qashqadaryo_Viloyati: [
      "Т у м а н .....",
      "Гузор   ",
      "Дехконовод  ",
      "Касби  ",
      "Китоб ",
      "Косон ",
      "Кукдала ",
      " Камаши ",
      "Карши ",
      "Карши_тумани ",
      " Миришкор ",
      " Муборак ",
      "Нишон",
      " Чирокчи ",
      " Шахрисабз ",
      " Шахрисабз_тумани",
      "Яккабог ",
    ],
    Toshkent_Viloyati: ["Chilonzor", "Yashnabad", "Mirabad"],
  };
  return (
    <>
      <label htmlFor={id}>{label}:</label>
      <select id={id} name={id} className={classInp}>
        {regions[id].map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </>
  );
};
OptionInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  classInp: PropTypes.string,
};

OptionInput.defaultProps = {
  id: "",
  label: "",
  classInp: "",
};
