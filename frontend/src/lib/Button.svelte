<button class={type}>
    {label}
</button>

<script>
    export let label = "Submit";
    export let type = "primary";
</script>

<style>
    button{
        padding: 10px;
        border-radius: 50px;
        width: 100%;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
    }

    button.primary{
        background-color: #5565FB;
        color: #ffffff;
    }

    button.primary:hover{
        background-color: #4355f0;
    }
</style>