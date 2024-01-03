<div id="root">
    <div>
        <form method="post">
            <h1>Sign Up</h1>
            <Input name="username" label="Username" placeholder="Enter your username" required></Input>
            <Input name="email" label="Email" placeholder="john@email.com" type="email" required></Input>
            <Input name="password" label="Password" placeholder="Enter your password" type="password" required></Input>
            <Input name="confirm" label="Confirm Password" placeholder="Verify your password" type="password" required></Input>
            <Button></Button>
        </form>
    </div>
    <span>
        <Infographic></Infographic>
    </span>
</div>

<script>
    import Infographic from "$lib/Infographic.svelte";
    import Input from "$lib/Input.svelte";
    import Button from "$lib/Button.svelte";
</script>

<style>
    #root{
        display: flex;
        flex-direction: row;
        height: 100%;
        width: 100%;
    }

    #root div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
    }

    span{
        margin-left: auto;
        padding: 20px;
        width: 50%;
    }

    form{
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 60%;
        max-width: 350px;
    }

    @media screen and (max-width: 811px){
        #root div{
            width: 100%;
        }

        form{
            width: 60%;
        }

        span{
            display: none;
        }
    }

    @media screen and (max-width: 431px){
        form{
            width: 80%;
        }
    }
</style>