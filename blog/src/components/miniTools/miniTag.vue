<template>
    <span class="miniTag">
        <a target="_blank"
           :href="href">
            {{content}}
        </a>
    </span>
</template>

<script>
export default {
    name: "miniTag",
    props: {
        href: {
            type: String,
            default: "/"
        },
        content: {
            type: String,
            default: ""
        }
    }
};
</script>

<style scoped>
@media screen and (max-width: 480px) {
} /* 超小设备（手机，小于 480px） */
.miniTag {
    height: 20px;
    position: relative;
    display: inline-block;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 3px 10px;
    border-radius: 0px 5px 5px 0px;
    margin-bottom: 10px;
}
.miniTag a {
    height: 100%;
    color: white;
}
.miniTag::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: -26px;
    border: 13px solid transparent;
    border-right: 13px solid rgba(0, 0, 0, 0.6);
}
.miniTag::after {
    content: " ";
    display: block;
    position: absolute;
    height: 4px;
    width: 4px;
    border-radius: 4px;
    left: -5px;
    bottom: 11px;
    background: rgb(255, 255, 255);
}
.miniTag a:hover {
    color: white !important;
}
.miniTag {
    margin-right: 25px;
}
</style>