// Food billing system

#include <stdio.h>
#include <stdlib.h>

// Variables
int choice, quantity, amount = 1, total_amt = 0;
char more;

// creating menu() to get user's choice
void menu()
{
    printf("\n-------------- MENU --------------");
    printf("\n1. Pizza      Price = 180rs/pcs");
    printf("\n2. Burder     Price = 100rs/pcs");
    printf("\n3. Dosa       Price = 120rs/pcs");
    printf("\n4. Idli       Price = 50rs/pcs");
    printf("\nPlease Enter your choice : ");
    scanf("%d", &choice);
    order();
}

// creating order() function for user's choice
int order()
{
    switch (choice)
    {
    case 1:
        printf("\nYou have selected Pizza.");

        printf("\nEnter the quantity : "); // get quantity
        scanf("%d", &quantity);

        amount = 180 * quantity; // calculation of amount
        printf("\nAmount : %d", amount);

        total_amt = total_amt + amount; // calculation of total amount
        printf("\nTotal Amount is = %d", total_amt);

        printf("\ndo you want place more order ? y or n : ");
        scanf(" %c", &more);

        more_order(); // more_order() function calling

        break;

    case 2:
        printf("\nYou have selected Burger.");

        printf("\nEnter the quantity : "); // get quantity
        scanf("%d", &quantity);

        amount = 100 * quantity; // calculation of amount
        printf("\nAmount : %d", amount);

        total_amt = total_amt + amount; // calculation of total amount
        printf("\nTotal Amount is = %d", total_amt);

        printf("\ndo you want place more order ? y or n : ");
        scanf(" %c", &more);

        more_order(); // more_order() function calling

        break;

    case 3:
        printf("\nYou have selected Dosa.");

        printf("\nEnter the quantity : "); // get quantity
        scanf("%d", &quantity);

        amount = 120 * quantity; // calculation of amount
        printf("\nAmount : %d", amount);

        total_amt = total_amt + amount; // calculation of total amount
        printf("\nTotal Amount is = %d", total_amt);

        printf("\ndo you want place more order ? y or n : ");
        scanf(" %c", &more);

        more_order(); // more_order() function calling

        break;

    case 4:
        printf("\nYou have selected Idli.");

        printf("\nEnter the quantity : "); // get quantity
        scanf("%d", &quantity);

        amount = 50 * quantity; // calculation of amount
        printf("\nAmount : %d", amount);

        total_amt = total_amt + amount; // calculation of total amount
        printf("\nTotal Amount is = %d", total_amt);

        printf("\ndo you want place more order ? y or n : ");
        scanf(" %c", &more);

        more_order(); // more_order() function calling

        break;

    default:
        printf("Please Enter number as per menu... Do you want to place order? y or n : ");
        scanf(" %c", &more);

        more_order(); // more_order() function calling

        break;
    }
}

// creating more_order() function
void more_order()
{
    // condition for looping the function
    if (more == 'y')
    {
        menu();  // menu() function calling
        order(); // order() function calling
    }
    else if (more == 'n')
    {
        printf("\nYour total Bill is : %d", total_amt);
        printf("\nThank You for Order! Enjoy Your Meal!!");
        exit(0); // exit function for stop execution of code
    }
    else
    {
        printf("Please Enter y or n.");
        exit(0); // exit function for stop execution of code
    }
}

// main function
void main()
{
    // do..while loop
    do
    {
        menu(); // menu() function calling
    } while (more != 'n');
}
