import { colors } from '@/theme/colors';
import { Text, StyleSheet } from 'react-native';

export const highlightWords = (text: string) => {
  // palabras o frases a poner en negrita
  const keywords = [
    'Médico general a domicilio',
    'Videoconsulta',
    'Indemnización',
    'Consultas en clínica',
    'Medicinas y exámenes',
    'más de 200 clínicas del país',
    'Un Chequeo preventivo general',
    'Vacunas',
    'Incluye todos los beneficios del Plan en Casa',
  ];

  // crear un regex con las frases clave
  const regex = new RegExp(`(${keywords.join('|')})`, 'gi');

  // dividir el texto por las coincidencias
  const parts = text.split(regex);

  // devolver componentes de texto con estilo
  return parts.map((part, index) => {
    const match = keywords.find(
      kw => kw.toLowerCase() === part.toLowerCase().trim(),
    );

    if (match) {
      return (
        <Text key={index} style={styles.bold}>
          {part}
        </Text>
      );
    }

    return (
      <Text style={styles.text} key={index}>
        {part}
      </Text>
    );
  });
};

const styles = StyleSheet.create({
  text: {
    flexShrink: 1,
    fontSize: 16,
    lineHeight: 28,
    letterSpacing: 0.1,
    fontWeight: '400',
    color: colors.textBlack,
  },
  bold: {
    flexShrink: 1,
    fontSize: 16,
    lineHeight: 28,
    letterSpacing: 0.1,
    fontWeight: '700',
    color: colors.textBlack,
  },
});
