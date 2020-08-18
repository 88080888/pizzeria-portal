# Dashboard

  - `/`
    - statystyki dzisiejszych zamówień (zdalne i lokalne)
    - lista rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

  - `/login`
    - pola na login i hasło
    - guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików

  - `/tables`
   - wybór daty i godziny
   - tabela z listą rezerwacji i wydarzeń
    - kazda kolumna = 1 stolik
    - kazdy wiersz = 30 minut
    - ma przypominac widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni są rózne stoliki
    - po kliknięciu rezerwacji lub eventu przechodzimy na stronę szczegółów
  - `/tables/booking/:id`
    - zawiera wszystkie info dotyczące rezerwacji
    - umozliwia edycję i zapisanie zmian
  - `/tables/booking/new`
   - analogicznie do powyzszej, bez początkowych informacji
  - `/tables/events/:id`
    - analogicznie do powyzszej, dla eventów
  - `/tables/events/new`
    - analogicznie do powyzszej, dla eventów, bez początkowych informacji

# Widok kelnera

  - `/waiter`
    - tabela
      - w wierszach stoliki
      - w kolumnach rózne rodzaje info (status, czas od ostatniej aktywnosci)
      - w ostatniej kolumnie dostęone akcje dla danego stolika
  - `/waiter/order/new`
    - nr stolika (edytowalny)
    - menu produktów
    - opce wybranego produktu
    - zamówienie (zamowione produkty z opcjami i ceną)
    - kwota zamówenia
  - `/waiter/order/:id`
    - jak powysza

# Widok kuchni

  - `kitchen`
    - wyświetla listę zamówień w kolejności jej złoenia. lista musi zawierać:
      - nr stolika (lub zamowienia zdalnego)
      - pełne info dot. zamówionych dań
    - na liście musi być mozliwość oznaczenia zamowienia jako zrealizowane  
