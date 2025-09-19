    # Database Diagramm

``` mermaid
erDiagram
    USER {
        int user_id PK
        text name
        text email
        text role
    }
    JOURNAL_ENTRY {
        int journal_entry_id PK
        timestamp date
        text description
    }

    ACCOUNT {
        int account_id PK
        text name
        text type "ENUM: Asset|Liability|Equity|Revenue|Expense"
        text owner
    }

    TRANSACTION {
        int transaction_id PK
        int journal_entry_id FK
        int account_id FK
        numeric amount
        text type "ENUM: debit|credit"
    }

    USER ||--o{ JOURNAL_ENTRY : "creates"
    JOURNAL_ENTRY ||--|{  TRANSACTION : "contains"
    TRANSACTION }o--||  ACCOUNT : "records"

```
