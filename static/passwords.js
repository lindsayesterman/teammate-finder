//bools
//var comfirmPasswordBool = false;
//var login = false;
//var nameLen = false; //checks if the username fits the length
//var passLen = false; //checks if the password fits the length
//var badPassword = true; //checks if the password fits all the reqs
//var badUserName = true; //checks if the userName fits all the reqs
//var numbersTrue = false; //if there are numbers in password
//var upperLettersTrue = false; //if there are uppercase letters in password
//var symbolsTrue = false; //if there are symbols in password
//
////ints
//var numbers = 0; //numbers in password
//var upperLetters = 0; //uppercase letters in password
//var symbols = 0; //symbols in password
//
////Strings
//var userName = "";
//var password = "";
//var loginUserName = "";
//var loginPassword = "";
//var loginSignUp = "";
//var comfirmPassword = "";
//
////arrays(lists of the things)
//var upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'Rvar   'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; //Uppercase alphabet
//var symbolList = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '|', '/', '?', '>', '<var   ',', '.', ':', ';', '-', '_', '+', '=']; //all symbols
//var numbersList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']; //all numbers
//
////hashmap
//HashMap<String, String> loginDetails = new HashMap<String, String>();


/*
Scanner input = new Scanner(System.in);
while(login == false) {
    System.out.print("Login or Sign-up: ");
    loginSignUp = input.nextLine();

    if(loginSignUp.toLowerCase().equals("login")) {
        System.out.print("Username: ");
        loginUserName = input.nextLine();
        System.out.print("Password: ");
        loginPassword = input.nextLine();
        if(loginDetails.containsKey(loginUserName) && loginPassword.equals(loginDetails.get(loginUserName))) {
                System.out.println("You are logged in.");
                login = true;
        } else {
            System.out.println("There are no matches of your username of password");
        }
    }
    if(loginSignUp.toLowerCase().equals("sign up") || loginSignUp.toLowerCase().equals("sign-up")) {
        login = true;
    }
}

if(loginSignUp.toLowerCase().equals("sign up") || loginSignUp.toLowerCase().equals("sign-up")) {
    System.out.print("Enter your username: ");
    userName = input.nextLine();

    while(badUserName == true) {
        while(nameLen == false) {
            if(userName.length() < 8 || userName.length() > 20) {
                System.out.println("Username must be 8 to 20 characters");
                System.out.print("Enter your username: ");
                userName = input.nextLine();
            }
            if(userName.length() >= 8 && userName.length() <= 20) {
                nameLen = true;
                badUserName = false;
            }
        }
    }

    System.out.print("Enter your password: ");
    password = input.nextLine();

    while(badPassword == true) {
        while(passLen == false) {
            if(password.length() < 8) {
                System.out.println("Password is too short");
                System.out.print("Enter your password: ");
                password = input.nextLine();
            }
            if(password.length() > 8) {
                passLen = true;
            }
        }

        for(int i = 0; i < password.length(); i++) {
            for (int k = 0; k < numbersList.length; k++) {
                if(password.charAt(i) == numbersList[k]) {
                    numbers++;
                }
            }
        }
        for(int j = 0; j < password.length(); j++) {
            for(int a = 0; a < upperAlphabet.length; a++) {
                if(password.charAt(j) == upperAlphabet[a]) {
                    upperLetters++;
                }
            }
        }
        for(int b = 0; b < password.length(); b++) {
            for(int c = 0; c < symbolList.length; c++) {
                if(password.charAt(b) == symbolList[c]) {
                    symbols++;
                }
            }
        }
        if(numbers >= 3) {
            numbersTrue = true;
        }
        if(symbols >= 1) {
            symbolsTrue = true;
        }
        if(upperLetters >= 2) {
            upperLettersTrue = true;
        }
        if(symbolsTrue == true && numbersTrue == true && upperLettersTrue == true) {
            badPassword = false;
        }
        if(symbolsTrue == false || numbersTrue == false || upperLettersTrue == false) {
            System.out.println("Bad Password");
            System.out.print("Enter your password: ");
            password = input.nextLine();
        }
    }
    while(comfirmPasswordBool == false) {
        System.out.print("Confirm your password: ");
        comfirmPassword = input.nextLine();
        if(comfirmPassword.equals(password)) {
            System.out.println("You are all signed-up!");
            System.out.println("Bellow are your login details:");
            System.out.println("Username = " + userName);
            System.out.println("Password = " + password);
            loginDetails.put(userName, password);
            comfirmPasswordBool = true;
        }
    }
}*/