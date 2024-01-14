<div>
    <label for={name}>
        {label}
        {#if required}
        <span>*</span>
        {/if}
    </label>
    <input type={type} id={name} name={name} placeholder={placeholder} value={value} required={required} autocomplete="off">
</div>

<style>
    div{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    span{
        color: #d82828;
    }

    input{
        outline: none;
        border-radius: 10px;
        border: 1px solid #cdcdcd;
        padding: 10px;
        width: 100%;
    }

    label{
        color: #555555;
    }
</style>

<script>
    export let type = "text";
    export let name = "text";
    export let label = "Text";
    export let placeholder = "Enter some text!";
    export let value = "";
    export let required = false;
</script>