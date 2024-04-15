import { View, Text } from "@/components/Themed";
import { FlatList, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthProvider";
import { Redirect } from "expo-router";
import Accordion from "@/components/Accordion";

const faq = [
  {
    title: "Štetili li darivanje krvi zdravlju?",
    description:
      "Darivanje krvi ne šteti zdravlju ako se provedu svi propisani postupci pri odabiru darivatelja krvi. Svaka zdrava osoba između 18 i 65 godina starosti može bez opasnosti za svoje zdravlje darovati krv, 3 do 4 puta tijekom jedne godine.",
  },
  {
    title: "Može li se darivanjem krvi zaraziti od neke bolesti?",
    description:
      "Tijekom darivanja krvi ne postoji mogućnost zaraze davriaoca. Sav pribor za uzimanje krvi - igle, plastične kese i ostali materijal koji se koristi pri uzimanju krvi su sterilni i za jednokratnu su upotrebu. Pribor je napravljen na način koji onemogućuje njegovu ponovnu upotrebu",
  },
  {
    title: "Zašto se odmah nakon darivanja krvi ne smije pušiti?",
    description:
      "Mnogi se pušači - darivatelji krvi ljute kada ih zamolimo da ne zapale cigaretu odmah nakon darivanja. Jedna od rjeđih, ali neugodnih reakcija organizma na pušenje je kratkotrajno stiskanje (spazam) krvnih žila u mozgu. Stoga, ako se puši odmah nakon završenog darivanja krvi, u nekih, posebno mlađih osoba, može doći do blage omaglice i mučnine. Postoji još čitav niz zdravstvenih i društvenih razloga koji pokazuju da ne bi trebalo pušiti, zar ne?",
  },
  {
    title: "Razvija li se ovisnost za darivanje krvi?",
    description:
      "Neki ljudi se ipak bolje osjećaju nakon što daruju krv i zato daruju krv nekoliko puta godišnje. Ta je pojava češća u osoba s blago povišenim krvnim tlakom. U tih je osoba darivanje krvi ujedno i način ublažavanja simptoma uzrokovanih blagim povišenjem krvnog tlaka, ali nije način liječenja povišenog tlaka.",
  },
  {
    title:
      "Zašto nekim darivaocima otekne mjesto uboda igle kroz koju je uzeta krv?",
    description:
      "Uzimanje krvi izvodi se ubodom sterilnom iglom u venu lakatne jame. Darivanje traje 8 do 12 minuta i kroz to vrijeme igla se nalazi u veni. Po završetku uzimanja krvi igla se vadi, a kožu se na mjestu uboda zaštićuje .  Da bi se ubrzalo zatvaranje otvora u veni, ispružena ruka se podiže u vis. U većini je slučajeva otvor u veni potpuno zatvoren u roku od par minuta i na koži ostaje samo mali trag uboda.",
  },
  {
    title: "Zašto se neki darivaoci ne osjećaju dobro nakon darivanja krvi?",
    description:
      "Većina zdravih osoba koje daruju krv podnosi gubitak 450 mL  krvi bez ikakvih nuspojava. Nuspojave su tijekom davrianja krvi rijetkost i opažaju se u oko 3 do 5% davanja krvi. Nuspojave se mogu pojaviti u toku darivanja, ali i do više  sati nakon darivanja krvi.",
  },
  {
    title: "Koliko često se može darivati krv?",
    description:
      "Muškarci mogu darivati punu krv svaka 3 mjeseca, a žene svaka 4 mjeseca.",
  },
  {
    title: "Mora li se nakon darivanja krvi nešto pojesti i popiti?",
    description:
      "Posebni medicinski razlozi ne zabranjuju darivaocu da jede ili pije nakon davrianja krvi. To je oblik društvenog ponašanja.",
  },
];

export default function Faq() {
  const { session } = useAuth();

  if (!session) {
    return <Redirect href="/" />;
  }
  return (
    <FlatList
      style={styles.container}
      data={faq}
      renderItem={({ item }) => (
        <Accordion title={item.title} content={item.description} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    // paddingTop: 32,
  },
});
