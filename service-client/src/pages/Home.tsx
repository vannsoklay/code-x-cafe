import Container from "../components/globals/Container";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <Container>
      <main className="mt-20">
        <span className="text-coffee-1">{t('fullname')}</span>
      </main>
    </Container>
  );
}
