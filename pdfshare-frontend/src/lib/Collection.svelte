<div id="collection">
    <span style:background-image={`url(${thumbnail})`}></span>
    <div>
        <p>@{username}</p>
        <h3>{title}</h3>
    </div>
    <div id="documents">
        {documents} documents
    </div>
</div>

<script>
    export let thumbnail = "";
    export let username = "";
    export let title = "";
    export let documents = 0;
</script>

<style>
    #collection{
        display: flex;
        flex-direction: column;
        width: 300px;
        min-height: 400px;
        border: 1px solid #cdcdcd;
        border-radius: 20px;
        padding: 20px;
        gap: 12px;

        & div{
            display: flex;
            flex-direction: column;
            gap: 5px;

            & p{
                color: #444444;
            }
        }

        & span{
            width: 100%;
            height: 70%;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            border-radius: 10px;
        }

        & #documents{
            background-color: #444444;
            color: #ffffff;
            padding: 10px;
            border-radius: 50px;
            font-size: 0.8rem;
            font-weight: bold;
            width: fit-content;
        }
    }
</style>