Stwórz aplikację pozwalającą na edycję danych zawartych w załączonym Jsonie. Aplikacja powinna
być responsywna.
Załóżmy, że piszemy część większej aplikacji. W związku z tym edycja właściwości będzie się odbywać
w lewym menu, prawa strona aplikacji będzie pusta (normalnie w prawej części mielibyśmy jakieś
obiekty, których właściwości edytowalibyśmy w lewym menu).
Szczegółowe wymagania:
1. Stwórz aplikację Reactową
2. Do zarządzania stanem użyj Reduxa
3. Zawartość załączonego Jsona przeparsuj JSON.parsem i wrzuć jako stan inicjalny reducera
4. Każda z właściwości ma swój typ, który oznacza jaka kontrolka będzie użyta do edycji
a. „text” – zwykły input, gdy użytkownik kliknie poza input (event onBlur) zawartość
inputa powinna zapisać się do store’a reduxowego
b. „checkbox” – zwykły checkbox, kliknięcie w checkbox zapisuje jego zmianę w storze
c. „combobox” – dropdown z wyszukiwarką, oraz z możliwością wprowadzenia nowej
opcji do comboboxa (properta o typie „combobox” posiada pole „options” z
dostępnymi opcjami dla dropdowna), czyli użytkownik może uznać, że nie pasują mu
dostępne opcje i chce wprowadzić własną. Gdy użytkownik wybierze opcję z
dropdowna, albo kliknie poza input, zmiana powinna zapisać się do store’a
5. Zauważ, że każda z propert ma pole „group” - oznacza, to że powinniśmy pogrupować
property po tym polu i wyświetlić je w rozwijalnych „Expansion panelach”. Tytuł Expansion
Panelu to nazwa grupy.
6. Niektóre z propert mają dodatkowe pole „image”. Gdy takie pole wystąpi dodaj przycisk
obok tej property.
a. Po wciśnięciu przycisku, spod lewego menu wyjedzie panel zakrywający całą prawą
stronę i na tym panelu zostanie wyrenderowany obrazek zapisany w polu „image”.
https://stackoverflow.com/questions/8499633/how-to-display-base64-images-inhtml
b. Gdy użytkownik kliknie przycisk ponownie, panel z obrazkiem schowa się pod lewym
menu
c. *Opcjonalnie* Możesz zrobić bardziej zaawansowaną wersję powyższego punktu –
jeśli użytkownik kliknie gdziekolwiek poza tym panelem, panel się ukryje
7. Możesz używać zewnętrznych bibliotek, jeśli pomoże Ci to osiągnąć cel. Polecam Material UI.

![image](https://github.com/jaceksekula1337/City-App/assets/110597769/1c4f68b3-4cc6-4a1b-9143-86b80a894b78)
