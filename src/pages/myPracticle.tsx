const MyPractice = () => {
    function foo<T>(args: Array<T>): Array<T> {
        console.log(args.length);
        return args;
    }

    foo([]);

    const func1 = (args: any[]): any[] => {
        return args;

    }
    func1([])

    return (
        <div>
            11
        </div>
    )
}

export default MyPractice;
