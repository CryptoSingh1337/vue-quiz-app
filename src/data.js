const data = [{
    id: 1,
    title: 'Java is a __________ Programming language.',
    compulsory: true,
    correctAnswer: 4,
    options: [
        {
            label: "Object oriented",
            value: 1,
        },
        {
            label: "High Level",
            value: 2,
        },
        {
            label: "Platform independent",
            value: 3,
        },
        {
            label: "All of the above",
            value: 4,
        },
    ]
},
{
    id: 2,
    title: 'Can we override main method which is declared in public class in java?',
    compulsory: true,
    correctAnswer: 1,
    options: [
        {
            label: "True",
            value: 1,
        },
        {
            label: "False",
            value: 2,
        },
    ]
},
{
    id: 3,
    title: 'What will be the output of the following program?',
    compulsory: true,
    code:
        `
        public class Main {
            public static void main (String ...args) {
                String s1 = "Hello World";
                String s2 = "Hello World";
                System.out.print(s1 == s2 + " ");

                String s3 = String.valueOf("Hello World");
                System.out.print(s1 == s3);
            }
        }
    `,
    correctAnswer: 3,
    options: [
        {
            label: "true true",
            value: 1,
        },
        {
            label: "false false",
            value: 2,
        },
        {
            label: "true false",
            value: 3,
        },
        {
            label: "true true",
            value: 4,
        },
        {
            label: "Runtime Exception",
            value: 5,
        },
    ]
},
{
    id: 4,
    title: 'Can we use static fields in non-static methods and vice versa?',
    compulsory: true,
    correctAnswer: 1,
    options: [
        {
            label: "Yes, we can use static field in non-static methods but vice versa is not possible.",
            value: 1,
        },
        {
            label: "Yes, we can use static field in non-static methods and vice versa is also possible.",
            value: 2,
        },
        {
            label: "No, we cannot use static fields in non-static methods and vice versa is also not possible.",
            value: 3,
        },
        {
            label: "No, we cannot use static fields in non-static methods but vice versa is possible.",
            value: 4,
        },
    ]
},
{
    id: 5,
    title: 'What will be the output of the following program:',
    compulsory: true,
    code:
        `
        inteface A {}

        class B implements A {}

        class C extends B {}

        class D extends B {}

        public class Main {
            public static void main (String ...args) {
                System.out.print((new D() instanceof A) + " ");
                System.out.print((new C() instanceof A) + " ");
                System.out.print((new B() instanceof D) + " ");
                System.out.print(new D() instanceof B);
            }
        }
    `,
    correctAnswer: 4,
    options: [
        {
            label: "true true false false",
            value: 1,
        },
        {
            label: "true false false true",
            value: 2,
        },
        {
            label: "false false false false",
            value: 3,
        },
        {
            label: "true true false true",
            value: 4,
        },
        {
            label: "Runtime Exception",
            value: 5,
        },
    ]
}]

export default data;