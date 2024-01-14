<div id="root">
    <div>
        <form method="post">
            <h1>Log In</h1>
            <Input name="email" label="Email" placeholder="john@email.com" type="email" required></Input>
            <Input name="password" label="Password" placeholder="Enter your password" type="password" required></Input>
            <Button label="Log In"></Button>
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
        width: 40%;
    }
</style>