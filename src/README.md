# Practice: Small Business

A small business wants to keep track of its employees and the computers that they use. Each employee is assigned to a department, and they each get assigned a computer when they join the company.

1. Build arrays of objects that represent _Employees_, _Departments_, and _Computers_.
1. Assign every resource a unique `id` property.
1. Assign each employee to a department using a foreign key.
1. Assign each employee a computer using a foreign key.

Once your data is normalized, use your DOM skills to display a card for each employee. It should display the employee name, the name of their department, and which computer they are using

```html
<article class="employee">
    <header class="employee__name">
        <h1>Rainu Ittycheriah</h1>
    </header>
    <section class="employee__department">
        Works in the IT department
    </section>
    <section class="employee__computer">
        Currently using a 2015 MacBook Pro
    </section>
</article>
```

## Challenge: Follow the Money

You need to design a database to represent the financial relationship between political candidates and corporate entities. Since corporations can contribute to political action committees (PAC), your job is to help see how politicians are being funded, and if that funding is directly translating into bills that politicians [sponsor](https://en.wikipedia.org/wiki/Sponsor_(legislative)).

1. Politicians can receive donations from many PACs or SuperPACs.
1. A legislative bill can be categorized to support a particular commercial interest.
1. Corporations can donate to multiple PACs, on multiple dates.
1. A bill can be sponsored by one, or more, politicians.
1. PACs can make direct contributions to a political campaign.
1. Corporations can have myriad interests for which they donate money to a PAC.

The resources in this system are as follows:

1. Politician
1. Corporation
1. Donation
1. PoliticalActionCommittee
1. LegislativeBill

Create an ERD that visualizes the relationships between these resources. You will need to create some entities in addition to the ones listed above to build the correct relationships.

## Advanced Challenge: Honest Abe API

Create an API using `json-server` for the resources you created above to track campaign contributions.

1. Create a `db.json` file containing all of the resources.
1. Define a few entries for each resource. Each resource must have a unique primary key.
1. Establish relationships between the resources by storing primary key values as foreign keys on related objects.
1. Run your API with the following command.
    ```sh
    json-server --watch db.json
    ```
1. Use jQuery's `$.ajax()` method to get all of the related data to build a card for each politician. It should list the bills they have sponsored, and any companies that have contributed to a PAC that has a shared interest for each bill.

```html
<article class="politician">
    <header class="politician__name">
        <h1>Abby Fleming</h1>
    </header>
    <section class="politician__bills">
        <h3>Sponsored Bills</h3>
        <div>
            <h4>S. 2325: Northern Mariana Islands U.S. Workforce Act</h4>
            <ul>
                <li>Employment</li>
                <li>Energy</li>
                <li>Natural Resources</li>
            </ul>
        </div>
    </section>
    <section class="politician__influencers">
        <h3>Related PACs</h3>
        <ul>
            <li>American Gas Association</li>
            <li>League of Conservation Voters Action Fund</li>
        </ul>
    </section>
</article>
````